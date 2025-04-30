const githubAPI = "https://api.github.com/users/Aditya-Sharma-Aiml";
//fetch or axios
const fetchData = async () => {
  try {
    const res = await fetch(githubAPI);
    const jsonData = await res.json();
    console.log(jsonData.login);
    console.log(jsonData);
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
  finally{
    console.log("ye hamesha chalega...");
    
  }

  //   console.log("data fetch ke lie wait nhi hoga agar await/async na lagaya toh - line executed!");

  
};
fetchData();

//named export
// export const role = "developer";

// //default export
// export default role;
