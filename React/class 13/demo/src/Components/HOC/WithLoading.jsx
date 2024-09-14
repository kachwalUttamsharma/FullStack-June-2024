// HOC
// class based component

import React, { useEffect, useState } from "react";

// Higher Order Component
const WithLoading = (WrappedComponent) => {
  //   return class extends React.Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {
  //         isLoading: true,
  //       };
  //     }

  //     componentDidMount() {
  //       // Simulating an async operation like fetching data
  //       setTimeout(() => {
  //         this.setState({ isLoading: false });
  //       }, 2000);
  //     }

  //     render() {
  //       if (this.state.isLoading) {
  //         return <div>Loading...</div>;
  //       }

  //       return <WrappedComponent {...this.props} />;
  //     }
  //   };

  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return <WrappedComponent {...props} />;
    }
  };
};

export default WithLoading;
