import DesktopLayout from './Layout';
import Strategies from './desktopStrategies';


export default connect(null)(() => {

  return <DesktopLayout Strategies={Strategies} />;
});
