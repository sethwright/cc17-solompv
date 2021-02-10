module.exports = {
    lintOnSave: false,
  
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:9999", // refers to server
          secure: false,
        },
      },
    },
  
    transpileDependencies: ["vuetify"],
  };  