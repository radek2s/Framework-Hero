import React from 'react';
import Highlight from "react-highlight";
import { useTranslation } from 'react-i18next'

const Lifecycle: React.FC = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('page.lifecycle.hooks.header')}</h1>

            <p>{t('page.lifecycle.hooks.content')}</p>

            <h2>{t('page.lifecycle.mount.header')}</h2>

            <p>{t('page.lifecycle.mount.content')}</p>

            <p>{t('page.lifecycle.mount.content2')}</p>

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

            <p>{t('page.lifecycle.mount.content3')}</p>

            

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

            <h2>{t('page.lifecycle.update.header')}</h2>

            <p>{t('page.lifecycle.update.content')}</p>

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

            <p>{t('page.lifecycle.update.content2')}</p>

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

            <p>{t('page.lifecycle.update.content3')}</p>

            <h2>{t('page.lifecycle.delete.header')}</h2>

            <p>{t('page.lifecycle.delete.content')}</p>

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

            <p>{t('page.lifecycle.delete.content2')}</p>

        </div>
    )

}

export default Lifecycle;