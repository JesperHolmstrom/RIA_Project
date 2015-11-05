var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Welcome to a very boring game</h2>
                <p>This is a simple 'incremental-game' made with React,Redux and React-router. I started off by shamelessly stealing Andreas Fridlund's code and work from there.</p>
                <p>The code is not very well thought out and is written mostly with Ctrl C + Ctrl V so I would appreciate pointers on what I can improve.</p>
            </div>
        );
    }
});

module.exports = Home;