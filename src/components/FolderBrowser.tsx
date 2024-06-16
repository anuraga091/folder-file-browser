import React from 'react';
import { folderStructure } from '../file-config';
import Folder from './Folder';

const FolderBrowser: React.FC = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Folder Browser</h1>
      <Folder folder={folderStructure} />
    </div>
  );
};

export default FolderBrowser;
