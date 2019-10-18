import React from 'react';
import { NewsContainer, Title } from './styles';
import NewsItem from '../../components/newsItem/index';
import Preloader from '../../components/preloader/index';
import { connect } from 'react-redux';
import { hideError, showError } from '../../actions/index';
import Error from '../../components/error/index';

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
    fetch(
      'https://newsapi.org/v2/top-headlines?country=ua&apiKey=10ade8962c444f4b9c9a49fd8f56589b'
    )
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error(res.status);
      })
      .then(newsObj => this.setState({ arrNews: newsObj.articles }))
      .catch(() => showError())
      .finally(() => this.setState({ preloader: false }));
  }

  render() {
    const { arrNews, preloader } = this.state;
    const { error, hideError } = this.props;
    return (
      <NewsContainer>
        {error ? (
          <Error
            hideError={hideError}
            text="Нет ответа от сервера. Попробуйте зайти позже."
          />
        ) : null}
        {preloader ? <Preloader /> : null}
        <Title>Все возможные новости, пожалуйста.</Title>
        {arrNews.map((item, index) => (
          <NewsItem
            key={index}
            description={item.description}
            title={item.title}
            url={item.url}
            img={item.urlToImage}
          />
        ))}
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
