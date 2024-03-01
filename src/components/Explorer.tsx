import { IonGrid, IonRow, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel, IonAlert, IonList, IonItemSliding, IonItem, IonFab, IonFabButton, IonFabList } from "@ionic/react";
import { addCircle, document, documentSharp, fileTray, folder, folderOpenOutline, folderOpenSharp, gridSharp, listSharp, trash } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { Storage } from '@ionic/storage';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import write_blob from "capacitor-blob-writer";
import { Plugins } from '@capacitor/core';
import './style.css';

const APP_DIRECTORY = Directory.Documents;
const PropertySet:React.FC = () =>{
    const {App} = Plugins;
    const [storageValue, setStorageValue] = useState('Default');
    const [browserStorage, setBrowserStorage] = useState('' as string);
    const [folders, setFolders] = useState([] as any[]);
    const [currentFolder, setCurrentFolder] = useState('');
    const [currentWidth, setCurrentWidth] = useState(window.screen.width);
    const [authcode, setAuthCode] = useState('' as string);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        App.addListener('appUrlOpen', (data:any) => {
            console.log('App opened with URL:', data.url);
            const url = decodeURIComponent(data.url);
            setAuthCode(url.split('=')[1] as string);  
        });
    }, []);

    window.addEventListener('resize', () => { 
        setCurrentWidth(window.screen.width);
    });

    useEffect(() => {
        const getStorageValue = async () => {
            const store = new Storage();
            store.create();
            const value = await store.get('key');
            const local = localStorage.getItem('browser');
            setBrowserStorage(local as string);
            setStorageValue(value);
          };
      getStorageValue();
      loadDocuments();
    },[]);

    async function loadDocuments(){
        let folderContent = await Filesystem.readdir({
            directory:  APP_DIRECTORY,
            path: currentFolder
          });
          let contents = folderContent.files.map( (file) => {  
            return {
                name: file.name,
                isFile: file.type === 'file',
            }
        });
        setFolders(contents);
        }

        async function createFolder(folderName:string){
            await Filesystem.mkdir({
                directory: APP_DIRECTORY,
                path: currentFolder+'/'+folderName,
            });
            loadDocuments();
        }

        async function uploadFile(file:File){
            await write_blob({
                directory: APP_DIRECTORY,
                path: currentFolder+'/'+file.name,
                blob:file
            })
            loadDocuments();
        }
        function handleFileChange(event: React.ChangeEvent<HTMLInputElement>){
            if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                uploadFile(file);
              }
        }

        async function deleteFileOrFolder(name:string){
            await Filesystem.deleteFile({
                directory: APP_DIRECTORY,
                path: currentFolder+'/'+name
            });
            loadDocuments();
        }


    return(
        <IonGrid>
            {currentWidth <= 426 && 
            <IonFab vertical="bottom" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={addCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="top">
                    <IonFabButton>
                        <IonIcon icon={document} onClick={() => fileInputRef.current?.click()}></IonIcon>
                    </IonFabButton>
                    <IonFabButton id='create-folder' >
                        <IonIcon icon={folder} ></IonIcon>
                    </IonFabButton>
                </IonFabList>
                <IonAlert
                        trigger="create-folder"
                        header="Create New Folder"
                        inputs={[{name: 'folderName', type: 'text', placeholder: 'Folder Name'}]}
                        buttons={[{text:'Create', handler: (data) => createFolder(data.folderName)}, {text: 'Cancel', role: 'cancel'}]}
                    ></IonAlert>
            </IonFab>}
            
            <IonRow>
                <IonToolbar>
                    <IonTitle>
                        Explorer
                    </IonTitle>
                    <IonButtons slot='end'>
                        <IonButton>
                            <IonIcon icon={gridSharp} size="primary"/>
                        </IonButton>
                        <IonButton>
                            <IonIcon icon={listSharp} size="primary"/>
                        </IonButton>
                        <IonButton>3D</IonButton>
                    </IonButtons>
                    {currentWidth > 426 && <IonButton slot="end" fill="solid" id="new-folder">New</IonButton> }
                    <IonAlert
                        trigger="new-folder"
                        header="Create New Folder"
                        inputs={[{name: 'folderName', type: 'text', placeholder: 'Folder Name'}]}
                        buttons={[{text:'Create', handler: (data) => createFolder(data.folderName)}, {text: 'Cancel', role: 'cancel'}]}
                    ></IonAlert>
                </IonToolbar>
            </IonRow>
            <IonRow>
                <IonGrid style={currentWidth > 836 ? {padding:'0 7rem'}:{}}>
                    <IonLabel><b>Code:</b> {authcode}</IonLabel>
                    <IonList>
                        <IonItemSliding>
                            {folders.map((folder) => {
                                return (
                                    <IonItem>
                                        <IonIcon icon={folder.isFile ? documentSharp :folderOpenSharp }></IonIcon>
                                        <IonLabel class="content-name" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipses'}}>{folder.name}</IonLabel>
                                        <IonButton slot="end" fill="solid" color='medium' onClick={() => deleteFileOrFolder(folder.name)} >
                                            <IonIcon icon={trash}></IonIcon>
                                        </IonButton>
                                    </IonItem>
                                )}
                           )}
                        </IonItemSliding>
                    </IonList>
                    <input hidden type="file" id="file-input" ref={fileInputRef}  onChange={handleFileChange} />
                </IonGrid>
            </IonRow>  
        </IonGrid>
    )
}

export default PropertySet;
