from django.urls import path, include
from . import views


urlpatterns= [
    # path('', include('frontend.urls')),
    path('', views.ListMood.as_view(), name='moods-home'), #localhost:8000/api/
    path('<int:pk>', views.DetailMood.as_view(), name='moods-show') #localhost:8000/api/1

    #we might need to consider changing our paths once we incorporate users/ and filter by happy/bad days
]