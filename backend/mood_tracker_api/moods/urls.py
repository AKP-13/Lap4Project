from django.urls import path

from . import views

urlpatterns= [
    path('', views.ListMood.as_view()),
    path('<int:pk>', views.DetailMood.as_view())
]