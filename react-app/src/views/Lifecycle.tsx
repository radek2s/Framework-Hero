import Highlight from "react-highlight";

const Lifecycle: React.FC = () => {
    return (
        <div>
            <h1>Components Lifecycle hooks</h1>

            <p>
                Hook is a common name for Component Lifecycle Event that is emitted
                during creation, update or deletion of specific component. They are very useful
                for fetching data on mount or for cleaning up intervals just before unmounting.
                In React 16.8 added support for Create and Update hook in Functional Components.
                Before that version developers must use Class Components to implement them.
            </p>

            <h2>Mounting</h2>

            <p>
                This lifecycle method runs only once when the component is mounted and rendered
                to the DOM. This hook can be useful for fetching initial data or for setting up.
            </p>

            <Highlight className="javascript">
                {`// Class Component Example
class PhotoGallery extends React.Component {
    ...

    componentDidMount() {
        ... 
        this.setState({photos: receivedPhotos});
    }

    ...
}`}
            </Highlight>

            <p>
                In class component this is quite simple because we just need to write a new
                function called <code>componentDidMount</code> and React just know that
                this method should be called right after mounted.
            </p>

            <Highlight className="javascript">
                {`// Function Component Example
const PhotoGallery = () => {
    ...
    useEffect(() => {
        ...
        setPhotos(receivedPhotos);

    }, []);

    ...
}`}
            </Highlight>

            <p>
                On the other hand in functional component we have to use <code>useEffect</code> method.
                But that might be a little bit tricky because we have to pass an empty array as a second argument.
                The first one is a callback function that will be called after the component is mounted.
                And the second parameter is an array of variables that should be watched for changes.
                So if we pass an empty array, the callback function will be called only once when the component is mounted.
            </p>

            <h2>Updating</h2>

            <p>
                Update hook is called just after any update inside the component. Too much updates
                can cause the performance issues. So it is very important to use it carefully.
            </p>

            <Highlight className="javascript">
                {`// Class Component Example
class PhotoGallery extends React.Component {
    ...

    componentDidUpdate(prevProps, prevState) {
        // This part is called every time anything in the component is updated
        ... 
        if(this.props.galleryId !== prevProps.galleryId) {
            // This part is called only when the galleryId is changed
        }
    }

    ...
}`}
            </Highlight>

            <p>
                Class components has just one method called <code>componentDidUpdate</code> that is called
                after the component is updated. The method receives two parameters: previous props and previous state.
                So we can check if the specific property or state value has changed and react to that event. For example
                we can fetch a new photo list every time the GalleryID property has changed.
            </p>

            <Highlight className="javascript">
                {`// Function Component Example
const PhotoGallery = ({galleryId}) => {
    ...

    useEffect(() => {
        // This part is called every time anything in the component is updated
    })

    useEffect(() => {
        // This part is called only when the galleryId is changed
    }, [galleryId])

    ...
}`}
            </Highlight>

            <p>
                Function components require an <code>useEffect</code> method from "React". It is the
                same method that we used to implement a "Mounted" hook in a functional component.
                This time the first example present a situation when we want take action every time
                anything in the component is updated. The second example present how to do something
                only when the specific property has changed. <br />
                As we can see this <code>useEffect</code> method is more simple and make code more readable.
                But it has a drawback. We can not access to the previous props or state value.
            </p>

            <h2>Deletion</h2>

            <p>
                Last but not least, the deletion lifecycle method. This method is called just before
                component removal or unmounting. It is called only once per component lifecycle.
            </p>

            <Highlight className="javascript">
                {`// Class Component Example
class PhotoGallery extends React.Component {
...

    componentWillUnmount() {
        ... 
        clearInterval(this.state.refreshInterval);
    }

    ...
}`}
            </Highlight>

            <p>
                <code>componentWillUnmount</code> method is responsible for cleaning up the component just before 
                it will be deleted. This time the React developer team do not provided any additional method to handle
                that hook inside Functional Components. 
            </p>


        </div>
    )

}

export default Lifecycle;