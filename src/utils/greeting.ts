const myDate = new Date();
const hrs = myDate.getHours();

const greeting = (): string => {
  if (hrs < 12) {
    return 'Good Morning';
  }
  if (hrs >= 12 && hrs < 17) {
    return 'Good Afternoon';
  }
  if (hrs >= 17) {
    return 'Good Evening';
  }
  return 'Could not get your time, try again later';
};

export default greeting;
