import {StatusBar} from 'react-native';
import {AuthProvider} from "./app/providers/AuthProvider";
import Navigation from "./app/navigation/Navigation";

export default function App() {
  return (
      <>
          <StatusBar barStyle={"default"} />
          <AuthProvider>
              <Navigation/>
          </AuthProvider>
      </>
  );
}

