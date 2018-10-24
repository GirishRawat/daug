import { StackNavigator } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';

export default StackNavigator ({
  Profile: {
    screen: ProfileScreen,
  },
  PostDetails: {
    screen: PostDetailsScreen,
  },
  
},
{
  initialRouteName: 'Profile',
  
}); 