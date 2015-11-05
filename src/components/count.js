var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Count = React.createClass({
    propTypes: {
        clickincrease: ptypes.func.isRequired,
        autoincrease: ptypes.func.isRequired,
        buyMulti: ptypes.func.isRequired,
        buyAutoBase: ptypes.func.isRequired,
        buyAutoBaseMultiplier: ptypes.func.isRequired
    },
    componentDidMount () {
        this.interval = setInterval(() => {
            this.props.autoincrease()
        }, 1000)
    },
    componentWillUnmount () {
        clearInterval(this.interval)
    },
    render: function(){
        return (
            <div>
                <h2>Life of a programmer</h2>

                <p>Lines of code: {this.props.linesOfCode}</p>
                <p>Lines per click: {this.props.clickIncrementMultiplier}</p>
                <p>Lines per second({this.props.autoBaseValue} * {this.props.autoIncrementMultiplier}): {this.props.autoBaseValue * this.props.autoIncrementMultiplier}</p>
                <p>
                    <button onClick={this.props.clickincrease}>Write code</button>
                    <button onClick={this.props.buyMulti}>Write more code with every click: {this.props.costMultiplier} lines of code</button>
                    <button onClick={this.props.buyAutoBase}>Hire a programmer: {this.props.costAutoBaseValue} lines of code</button>
                    <button onClick={this.props.buyAutoBaseMultiplier}>Make programmers faster: {this.props.costAutoBaseMultiplier} lines of code</button>
                </p>
            </div>
        );
    }
});


var mapStateToProps = function(state){
    return state.count;
};

var mapDispatchToProps = function(dispatch){
    return {
        clickincrease: function(){
            dispatch(actions.clickIncrease());
        },
        autoincrease: function(){
            dispatch(actions.autoIncrease());
        },
        buyMulti: function(){
            dispatch(actions.buyMultiplier());
        },
        buyAutoBase: function(){
            dispatch(actions.buyProgrammer());
        },
        buyAutoBaseMultiplier: function(){
            dispatch(actions.buyProgrammerUpgrade());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Count);