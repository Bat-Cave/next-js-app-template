const sampleFetch = async () => {
  return new Promise((resolve) => {
    resolve({ data: "sample", success: true, status: 200 });
  });
};

export { sampleFetch };
