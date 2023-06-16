from rest_framework import viewsets
from .serializer import UserSerializer, RoleSerializer , OrderSerializar, ProductSerializar, ClientSerializar, PermissionSerializer, DetailPermissionSerializer, SuppliesSerializar
from .models import User, Role, Order, Products, Permission,DetallePermiso, Supplies

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class PermissionView(viewsets.ModelViewSet):
    serializer_class = PermissionSerializer
    queryset = Permission.objects.all()

class DetailPermissionView(viewsets.ModelViewSet):
    serializer_class = DetailPermissionSerializer
    queryset = DetallePermiso.objects.all()

class RoleView(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()

class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializar
    queryset = Order.objects.all()
    
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializar
    queryset = Products.objects.all()


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializar
    

class SupplesView(viewsets.ModelViewSet):
    serializer_class = SuppliesSerializar
    queryset = Supplies.objects.all()
