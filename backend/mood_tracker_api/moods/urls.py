from django.urls import path

from . import views

urlpatterns= [
    path('', views.ListMood.as_view(), name='moods-home'),
    path('<int:pk>', views.DetailMood.as_view(), name='moods-show')
]