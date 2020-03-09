import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SingFormContainer from './Containers/SingFormContainer';
import CardsContainer from './Containers/CardsContainer';
import Logout from './Containers/Logout';
import AddPostContainer from './Containers/AddPostContainer';
import EditPostContainer from './Containers/EditPostContainer';

const Router = () => {
  const SingIn = (
    <SingFormContainer
      name="Sing in"
      linkName="Don't have an account? Sign Up"
      link="/registr"
      isLogin
    />
  );
  const SingUp = (
    <SingFormContainer
      name="Sing up"
      linkName="Already have an account? Sign in"
      link="/auth"
      isLogin={false}
    />
  );

  return (
    <Switch>
      <Route path="/" exact component={CardsContainer} />
      <Route path="/auth" render={() => SingIn} />
      <Route path="/registr" render={() => SingUp} />
      <Route path="/addpost" component={AddPostContainer} />
      <Route path="/logout" component={Logout} />
      <Route path="/post/edit/:id" component={EditPostContainer} />
      {/* <Route path="/post/:id" component={FullPost} />
          <Route path="/" exact component={PostsList} />   */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
