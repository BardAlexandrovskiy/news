import React from 'react';
import { NewsContainer, Title } from './styles';
import NewsItem from '../../components/NewsItem';
import Preloader from '../../components/Preloader';
import { connect } from 'react-redux';
import { hideError, showError } from '../../actions';
import Error from '../../components/Error';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrNews: [],
      preloader: false
    };
  }

  componentDidMount() {
    const { showError } = this.props;
    this.setState({ preloader: true });
    fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=GWNR75tapwV4yS2UbyV16BHepPcUTcZW')
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error(res.status);
      })
      .then(newsObj => {
        console.log(newsObj.results[0])
        return this.setState({ arrNews: newsObj.results })
      })
      .catch(() => showError())
      .finally(() => this.setState({ preloader: false }));
  }

  render() {
    const { arrNews, preloader } = this.state;
    const { error, hideError } = this.props;
    return (
      <NewsContainer>
        {error && (
          <Error
            hideError={hideError}
            text="Нет ответа от сервера. Попробуйте зайти позже."
          />
        )}
        {preloader && <Preloader />}
        <Title>Latest news:</Title>
        {arrNews.map((item, index) => {
          console.log(item)
          let img;

          if (item.multimedia) {
            img = item.multimedia[2].url
          } else img = null;

          return (
            < NewsItem
              key={index}
              description={item.abstract}
              title={item.title}
              url={item.url}
              img={img}
            />
          )
        })}
      </NewsContainer>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.news.error };
};

const mapDispatchToProps = dispatch => {
  return {
    showError: () => dispatch(showError()),
    hideError: () => dispatch(hideError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
