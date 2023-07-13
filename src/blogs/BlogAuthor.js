import React from 'react';

class App extends React.Component {
    render() {
        const { datePublished } = this.props;

        return (
            <div className="container-fluid">
                <div className='div-author d-flex mt-4 mb-3'>
                    <div className='position-relative me-2'>
                        <img src={require('../img/ali.png')} className="blog-author" alt="cover" />
                    </div>
                    <div className='position-relative me-2'>
                        <h5 className='blog-author-name'>Ali Zuhairi</h5>
                        <p className='blog-author-position text-secondary'>Professional Product Designer <br /> Published on {datePublished}</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;
