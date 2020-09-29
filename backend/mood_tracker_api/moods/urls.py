from rest_framework import routers
from .api import MoodViewSet

router = routers.DefaultRouter()
router.register('', MoodViewSet, 'moods')

urlpatterns = router.urls