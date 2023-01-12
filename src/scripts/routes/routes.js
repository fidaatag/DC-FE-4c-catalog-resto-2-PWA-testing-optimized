import AllResto from '../views/pages/all-resto';
import DetailResto from '../views/pages/detail-resto';
import FavoriterResto from '../views/pages/favorite';

const routes = {
  '/': AllResto,
  '/detail/:id': DetailResto,
  '/favorite': FavoriterResto,
};

export default routes;
