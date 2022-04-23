const pm2Config = {
  apps: [
    {
      name: 'Utility',
      script: './3rd/utility.js',
      exec_mode: 'cluster_mode',
      instances: 1,
    },
  ],
}

module.exports = pm2Config