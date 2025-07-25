export const getActivities = () => {
  const data = localStorage.getItem("clubActivities");
  return data ? JSON.parse(data) : [];
};

export const saveActivities = (activities) => {
  localStorage.setItem("clubActivities", JSON.stringify(activities));
};
