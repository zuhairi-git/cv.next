import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <hr className='border-top border-2 mt-5' />
                <div className='d-none m-4'>
                    <a href='' className='p-3'><i className='fab fa-linkedin-in'></i></a>
                    <a href='' className='p-3'><i className='fab fa-twitter'></i></a>
                    <a href='' className='p-3'><i className='fab fa-facebook-f'></i></a>
                </div>
            </div>

        );
    }
}

export default App;
