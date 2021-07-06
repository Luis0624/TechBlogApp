module.exports = {
    formatTime: function(date){
        const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        dateStyle: "short",
        timeStyle: "long"
        };
    return date.toLocaleDateString("en-US", options);
    },
    isEqual: function(a, b){
    return (a === b);
    }
};