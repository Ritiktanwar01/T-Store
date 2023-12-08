from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from .serializers import *
from .models import *

# Create your views here.
@api_view(['GET'])
def productdata(request):
    queryset = product.objects.all()
    serializer = serializerproduct(queryset, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def Signup(request):
    datam = request.data
    email = datam['email']
    mobile = datam['mobile']
    username = datam['user_name']

    serializer = serializeruser(data = request.data)
    if not serializer.is_valid():
        print(serializer.errors)
        return Response({'status':405,'payload':'Faild'})
    else:
        if  user.objects.filter(email = email).exists():
            return Response({'status':200,'payload':'Email aleardy regesterd !!'})
        elif user.objects.filter(user_name = username).exists():
            return Response({'status':200,'payload':'username already taken'})
        else:
            if  user.objects.filter(mobile = mobile).exists():
                return Response({'status':200,'payload':'Mobile Alredy Registerd'})
            else:
                serializer.save()
                return Response({'status':200,'payload':"User Created"})


@api_view(['POST'])
def Login(request):
    data = request.data
    email = data['email']
    password = data['password']
    if  user.objects.filter(email = email, password = password).exists():
        myuser = user.objects.get(email = email)
        unique_id = uuid4()
        newkey = tokens.objects.create(user = myuser,authtoken = unique_id,email = email)
        newkey.save()
        return Response({'status':200, 'payload':'Login Success','authkey':unique_id})
    else:
        return Response({'status':403,'payload':'Login Faild'})
    
@api_view(['POST'])
def tokenvaliadtion(request):
    data = request.data
    authtoken = data['token']
    if  tokens.objects.filter(authtoken = authtoken).exists():
        return Response({'status':200, 'payload':'authanticated'})
    else:
        return Response({'status':403,'payload':'Login Faild'})
    
@api_view(['POST'])
def addcartdata(request):
    data = request.data["token"]
    item = request.data["item"]
    itemname = request.data["itemname"]
    if product.objects.filter(product_id = item).exists():
        if product.objects.filter(product_name = itemname).exists():
            if  tokens.objects.filter(authtoken = data).exists():
                myuser = tokens.objects.get(authtoken =data)
                myuseremail = tokens.objects.filter(authtoken =data).values("email")
                newkey = cart.objects.create(user = myuser,item_id = item,email = myuseremail,item_name=itemname)
                newkey.save()
                return Response({'status':200, 'payload':'Item Added'})
            else:
                return Response({'status':403,'payload':'Faild'})
        else:
            return Response({'status':403,'payload':'Faild'})
    else:
        return Response({'status':"403",'payload':"invalid request"})


@api_view(['POST'])
def getusercartitem(request):
    token = request.data['token']
    if tokens.objects.filter(authtoken=token).exists():
        email = tokens.objects.filter(authtoken=token).values('email')
        usermail = email[0]['email']
        cartitems = cart.objects.all().filter(email=usermail).values("item_id")
        length_items = int(len(cartitems))
        i = 0
        usercart = []
        itemdata = []
        for i in range(length_items):
            usercart.append(cartitems[i]['item_id'])
        for h in range(len(usercart)):
            itemdata.append(product.objects.filter(product_id = usercart[h]).values('product_name','product_image','product_desc','product_id'))
        return Response(itemdata)
    

@api_view(['POST'])
def changepassword(request):
    token = request.data['token']
    password = request.data['oldpassword']
    Newpassword = request.data['newpassword']
    if tokens.objects.filter(authtoken=token).exists():
        email = tokens.objects.filter(authtoken=token).values('email')
        usermail = email[0]['email']
        if user.objects.filter(email = usermail,password=password).exists():
            usermain = user.objects.filter(email = usermail,password=password).update(password=Newpassword)
            tokens.objects.filter(authtoken= token).delete()
            return Response({'status':200})
        else:
           print("wrong password")
           return Response({'status':200})
    else:
        print("token dosent exist")
        return Response({'status':200})
        
@api_view(['POST'])
def sidebardata(request):
    data = request.data["token"]
    email = tokens.objects.filter(authtoken = data).values("email")
    usermail = email[0]['email']
    userdata = user.objects.filter(email = usermail).values("user_name","user_image")
    return Response({'status':200,'payload':userdata})



@api_view(['POST'])
def deletecartitem(request):
    token = request.data['token']
    itemid = request.data['itemid']
    if tokens.objects.filter(authtoken=token).exists():
        email = tokens.objects.filter(authtoken=token).values('email')
        usermail = email[0]['email']
        cartitems = cart.objects.filter(email=usermail,item_id = itemid)
        cartitems.delete()
        return Response({'status':200,'payload':cartitems})