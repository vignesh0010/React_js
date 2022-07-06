import './App.css';
// import Functional from './component/Functional';
// import ClassComponent from './component/ClassComponent';
// import JsxComponent from './component/JsxComponent';
// import State from './component/State';
// import FunctionClick from './component/FunctionClick';
// import ClassClick from './component/ClassClick';
// import EventBind from './component/EventBind';
// import Msp_parent from './component/Msp_parent';
// import List_keys from './component/List_keys';
// import Refs from './component/Refs';
// import Portals from './component/Portals';
// import HocClick from './component/HocClick';
// import HocHover from './component/HocHover';
// import ReanderClick from './component/ReanderClick';
// import RenderHover from './component/RenderHover';
// import RenderSame from './component/RenderSame';
// import ComponentA from './component/context/ComponentA';
// import { ContextProvider } from './component/context/UserContext';
// import PostList from './component/PostList'
// import PostForm from './component/PostForm';
import LifeCyclemount from './component/LifeCyclemount'





function App() {
  return (
    <div className="class">
      {/* <Functional name="kumar">
        <h5>this the childern tag</h5>
      </Functional>
      <Functional name="sakthi" />
      <Functional name="tamil" />
      <ClassComponent heroName="kavi"/>
      <ClassComponent heroName="vignesh"/>
      <ClassComponent heroName="sanmugam"/> 
      <JsxComponent /> 
      <State />
      <FunctionClick />
      <ClassClick />
      <EventBind /> 
      <Msp_parent/> 
      <List_keys />
       <Refs /> 
       <Portals />
       <HocClick myname="Vignesh" />
       <HocHover myname="Vignesh" />*/}
      {/* <RenderSame>
        {(count, eventHandler) => (
          <ReanderClick variable={count} commonfun={eventHandler} />
        )}
      </RenderSame>
      
      <RenderSame>
        {(count, eventHandler) => (
          <RenderHover variable={count} commonfun={eventHandler} />
        )}
      </RenderSame> */}
      {/* <ContextProvider value="vignesh">
        <ComponentA />
      </ContextProvider> */}
      {/* <PostList/>
      <PostForm/> */}
      <LifeCyclemount/>
    </div>
  );
}

export default App;
