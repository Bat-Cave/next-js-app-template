const sampleFetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "sample", success: true, status: 200 });
    }, 3000);
  });
};

export { sampleFetch };
