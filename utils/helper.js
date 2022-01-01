const formatDate = (date) => {
  moment(date).format("MMMM Do YYYY, h:mm a");
};

module.exports = { formatDate };
