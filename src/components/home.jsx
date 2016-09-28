import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.scss';
import { connect } from 'react-redux';
import RecipeList from './RecipeList.jsx';
import React, {PropTypes} from 'react';

const Home = ({recipes}) => (
  <div className={styles.home}>
    <RecipeList recipes={recipes} />
  </div>
);

Home.propTypes = {
  params: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = (state = {recipes: []}) => {
  console.log(state);
  return {recipes: state.recipes};
}

export default connect(mapStateToProps)(Home);
