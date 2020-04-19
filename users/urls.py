from rest_framework.routers import DefaultRouter
from .views import UserViewSets

router = DefaultRouter()
router.register(r'', UserViewSets, base_name='users')
urlpatterns = router.urls
