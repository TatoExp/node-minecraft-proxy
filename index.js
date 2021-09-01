const Proxy = require('./src/Proxy.js')
const createProxy = require('./src/createProxy.js')

let localServerOptions = {
	'port': '25565',
	'version': '1.8.8',
	'online-mode': false,
	'motd': 'nodejs minecraft proxy'
  }
  
  let serverList = {
	main: {
	  host: 'mc.hypixel.net',
	  port: 25565,
	  isDefault: true,
	  isFallback: false,
	}
  }
  
  // if you leave proxyOptions empty yo may as well not pass it in the arguments, I wrote it anyway to point out that it exist
  let proxyOptions = {}
  
  /*
	Use the "/server <serverName>" command in chat to move between servers.
	<serverName> is the name that you chose for the server inside the serverList
	This command is implemented by /src/Plugins/ChatCommands.js and it can be disabled by setting enablePlugin: false inside proxyOptions
  */
  let proxy = createProxy(localServerOptions, serverList, proxyOptions);
  
  proxy.on('error', console.error);
  
  proxy.on('listening', () => {
	console.info('Listening!');
  });