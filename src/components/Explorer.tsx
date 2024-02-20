import { IonGrid, IonRow, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel, IonAlert, IonList, IonItemSliding, IonItem, IonFab, IonFabButton, IonFabList } from "@ionic/react";
import { addCircle, document, fileTray, folder, folderOpenOutline, gridSharp, listSharp } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { Storage } from '@ionic/storage';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import write_blob from "capacitor-blob-writer";

const APP_DIRECTORY = Directory.Documents;
const PropertySet:React.FC = () =>{
    
    const [storageValue, setStorageValue] = useState('Default');
    const [folders, setFolders] = useState([] as any[]);
    const [currentFolder, setCurrentFolder] = useState('');
    const [currentWidth, setCurrentWidth] = useState(window.screen.width);
    const fileInputRef = useRef<HTMLInputElement>(null);

    window.addEventListener('resize', () => { 
        setCurrentWidth(window.screen.width);
    });

    useEffect(() => {
        const getStorageValue = async () => {
            const store = new Storage();
            store.create();
            const value = await store.get('key');
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


    return(
        <IonGrid style={{padding:'1rem'}}>
            {currentWidth <= 426 && 
            <IonFab vertical="bottom" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={addCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="top">
                    <IonFabButton>
                        <IonIcon icon={document} onClick={() => fileInputRef.current?.click()}></IonIcon>
                    </IonFabButton>
                    <IonFabButton id='new-folder' >
                        <IonIcon icon={folder} ></IonIcon>
                    </IonFabButton>
                </IonFabList>
                <IonAlert
                        trigger="new-folder"
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
                <IonGrid className="ion-padding">
                    <IonLabel>LocalStorage value: {storageValue}</IonLabel>
                    <IonList>
                        <IonItemSliding>
                            {folders.map((folder) => {
                                return (
                                    <IonItem>
                                        <IonIcon icon={folder.isFile ? document:folderOpenOutline}></IonIcon>
                                        {folder.name}
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