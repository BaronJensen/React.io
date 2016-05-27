//We need to import our controllers file
import Controller from 'project/controller/controller';

//We create apps using the controller and the 1th arg have to be the id of the container:
const mainApp = new Controller('app');

/*
If you want to use the same socket in other app you can do the follow things
	const mainApp = new Controller('app');
	new App2Controller().setSocket(mainApp.getSocket());
*/
