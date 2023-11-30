from django.urls import path
from .views import *
urlpatterns =[
    path('getproducts/', productdata),
    path('signup/', Signup),
    path('login/', Login),
    path('tokenvalidate/', tokenvaliadtion),
    path('addcart/', addcartdata),
    path('getcartuser/', getusercartitem)
]