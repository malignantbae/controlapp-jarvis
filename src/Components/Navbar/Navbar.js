import child_process from 'child_process';
import util from 'util';
import ping from 'ping';

const hosts = ['10.1.0.11', 
    '10.1.0.6', 
    '10.1.0.8', 
    '10.2.0.20',
    'www.platzi.com', 
    '8.8.8.8',
    '10.1.0.10',
    '10.1.0.13',
    '10.1.0.2',
    '10.1.2.5',
    '18.239.225.127',
    '10.1.0.55' // printer frontdesk
    

];


/* const exec = util.promisify(child_process.exec);

async function ping(){
    try {
        const {stdout, stderr} = await exec(`ping -n 4 -w 1000 ${hostname}`);
        console.log('stdeer: ', stderr);
        console.log('stdout: ', stdout)
    } catch (err) {
        console.log(err);
    }
}

ping('10.1.0.11');
 */
/* async function example() {
    for (const host of hosts) {
      const config ={
        timeout: 10,
        extra: ['-i', '3'],
      };
      const response = await ping.promise.probe(host, config);
      console.log(response);
    }
  } */
/* 
example(); */

const config = {
    timeout: 10,
    // WARNING: -i 2 may not work in other platforms like windows
    extra: ['-i', '2'],
  };
  
  hosts.forEach(host => {
    ping.sys.probe(
      host,
      function (isAlive) {
        const message = isAlive
          ? 'host ' + host + ' is online'
          : 'host ' + host + ' is OFFLINE';
  
        console.log(message);
      },
      config,
    );
  });
