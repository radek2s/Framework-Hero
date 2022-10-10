import * as React from 'react';
import Highlight from 'react-highlight'
import { withTranslation, WithTranslation } from 'react-i18next'


interface Props {};
interface State {};

class Service extends React.Component<Props & WithTranslation, State> {
 
  render () {
    const { t } = this.props
    return (
        <div>
            <h1>{t("page.service.provider.header")}</h1>

            <p>{t("page.service.provider.content")}</p>

            <p>{t("page.service.provider.content2")}</p>

            <p>{t("page.service.provider.content3")}</p>

            <p>{t("page.service.provider.content4")}</p>

            <Highlight className="typescript">
                {`export interface PhotoGalleryService {
    getAllGaleries(): Promise<PhotoGallery[]>

    getGalery(id: number): Promise<PhotoGallery>

    createGalery(photos: Photo[]): Promise<PhotoGallery>
}`}
            </Highlight>

            <p>{t("page.service.provider.content5")}</p>

            <Highlight className="typescript">
                {`export default class PhotoGalleryApiProvider implements PhotoGalleryService {
    getAllGaleries(): Promise<PhotoGallery[]> {
        return axios.get('/api/v2/gallery')
    }

    getGalery(id: number): Promise<PhotoGallery> {
        return axios.get('/api/v2/gallery/{id}')
    }

    createGalery(photos: Photo[]): Promise<PhotoGallery> {
        return axios.post('/api/v2/gallery')
    }
}`}
            </Highlight>

            <p>{t("page.service.provider.content6")}</p>

            <p>{t("page.service.provider.content7")}</p>

            <Highlight className="typescript">
                {`export const PhotoGalleryContext = React.createContext<PhotoGalleryService>(new PhotoGalleryApiProvider())
...
const apiProvider = new PhotoGalleryApiProvider()
function App() {
    return (
        <div className="App">
            <PhotoGalleryContext.Provider value={apiProvider}>
                <>
                    ... Other components ...
                </>
            </PhotoGalleryContext.Provider>
        </div>
    )

}`}
            </Highlight>

            <p>{t("page.service.provider.content8")}</p>

            <Highlight className="typescript">
                {`const GalleryView: React.FC = () => {
    const galleryService = React.useContext(PhotoGalleryContext)

    useEffect(() => {
        galleryService.getAllGaleries().then(() => {
            ...
        })
    }, [])

    ...
}`}
            </Highlight>

            <p>{t("page.service.provider.content9")}</p>            
        </div>
    );
  }
}

export default withTranslation()(Service)