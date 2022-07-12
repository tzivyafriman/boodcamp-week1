
import React from 'react';
import {NavigateOptions, Params, useLocation, useNavigate, useParams} from 'react-router-dom';

function ForRouter/*<T extends Object>*/(Component: React.ComponentType<IForRouter & Object>/*<IForRouter & T>*/) 
{
  function ComponentWithRouterProp(props: any) 
  {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    const myprops =
    {
        location,
        navigate,
        params
    }
    return <Component {...props} id="1" {...myprops} />;
  }
  return ComponentWithRouterProp;
}
export default ForRouter;

export interface IForRouter 
{
    location: Location,
    navigate: NavigateOptions,
    params: Params<string>,
}


// import React from 'react';
// import { useNavigate, useLocation, useParams } from 'react-router-dom';

// function ForRouter(Component){

//     function ForRouter2(props){
//         let navigat = useNavigate();
//         let location = useLocation();
//         let params = useParams();

//         return <Component {...props} {...{location, params, navigat}}/>
//     }
//     return ForRouter2;
// }

// export function ForRouter;

