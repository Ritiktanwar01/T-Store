from django.db import models
from uuid import uuid4

# Create your models here.
class product(models.Model):
    product_id = models.UUIDField(editable=True,default=uuid4,null=True)
    product_name = models.CharField(max_length=50)
    product_image = models.ImageField(upload_to='media/productimage')
    product_desc = models.CharField(max_length=400)
    def __str__(self):
     return self.product_name
    

class user(models.Model):
   user_name = models.CharField(max_length=200)
   user_image = models.ImageField(upload_to='media/userProfiles',default='media/userProfiles/default.png')
   email = models.CharField(max_length=120)
   mobile = models.CharField(max_length=12)
   password = models.CharField(max_length=180)
   def __str__(self):
    return self.email
   
class tokens(models.Model):
  user = models.ForeignKey(user, on_delete=models.CASCADE)
  authtoken = models.CharField(max_length=20000)
  email = models.CharField(max_length=200,null=True)
  def __str__(self):
    return self.authtoken

class cart(models.Model):
  user = models.ForeignKey(tokens, on_delete=models.CASCADE)
  item_id = models.CharField(max_length=200)
  item_name = models.CharField(max_length=200,null=True)
  email = models.CharField(max_length=200,null=True)
  def __str__(self):
    return self.item_id