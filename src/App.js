import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Header } from './components/header';
import { Headline } from './components/headline';
import { SharedButton } from './components/buttons';
import { fetchPosts } from './redux/posts/posts.actions';

import './styles/app.scss';
import PostsList from './components/posts/PostsList';

const tempArr = [
  {
    fName: 'Test fName',
    lName: 'Test lName',
    age: 23,
    onlineStatus: false,
  },
];

const App = ({ fetchPosts }) => {
  const [hideBtn, setHideBtn] = useState(false);

  const fetch = () => {
    console.log('fetch clicked');
    fetchPosts();
    toggleHideBtn();
  };

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch,
  };

  const toggleHideBtn = () => {
    setHideBtn(!hideBtn);
  };

  return (
    <div className='App' data-test='appComponent'>
      <Header />
      <section className='main'>
        <Headline
          header='Test Header'
          desc='click the button to render posts!'
          tempArr={tempArr}
        />
        {!hideBtn && <SharedButton {...configButton} />}
        <PostsList />
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
