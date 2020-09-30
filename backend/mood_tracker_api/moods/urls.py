from rest_framework import routers
from .api import MoodViewSet
from .api import JournalViewSet


router = routers.DefaultRouter()
router.register('moods', MoodViewSet, 'moods')
router.register('journals', JournalViewSet, 'journals')



urlpatterns = router.urls