import React, { useState } from 'react';
import File from './File';
import ExpandIcon from '../assets/expand.svg';
import CollapseIcon from '../assets/collapse.svg';

interface FolderProps {
  folder: {
    name: string;
    isFolder: boolean;
    items?: Array<any>;
  };
}

const Folder: React.FC<FolderProps> = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div onClick={toggleOpen} className='toggle'>
        {folder.isFolder && (
          <img src={isOpen ? CollapseIcon : ExpandIcon} alt="Toggle Icon" width="16" height="16" className='toggle-icon'/>
        )}
        <p className="folder-name">{folder.name}</p>
      </div>
      {isOpen && folder.items && (
        <div className="folder-content">
          {folder.items.map((item, index) => (
            item.isFolder ? (
              <Folder key={index} folder={item} />
            ) : (
              <File key={index} file={item} />
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
