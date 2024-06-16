import React from 'react';
import HtmlIcon from '../assets/html.png';
import CssIcon from '../assets/css.jpeg';
import JsIcon from '../assets/js.webp';
import TsIcon from '../assets/ts.png';
import TsxIcon from '../assets/tsx.webp'
import TestIcon from '../assets/jsx.png'
import PhotoIcon from '../assets/photo.jpeg'
import GitIgnoreIcon from '../assets/gitignore.webp'
import JsonIcon from '../assets/json.png'

interface FileProps {
  file: {
    name: string;
  };
}

const getFileIcon = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  const isTestFile = fileName.includes('.test.');

  if (isTestFile) {
    switch (extension) {
      case 'tsx':
      case 'jsx':
      case 'js':
      case 'ts':
        return <img src={TestIcon} alt="Test TSX Icon" width="16" height="16" />;
      default:
        break;
    }
  }

  switch (extension) {
    case 'html':
      return <img src={HtmlIcon} alt="html" width="16" height="16"/>;
    case 'css':
      return <img src={CssIcon} alt="html" width="16" height="16"/>;
    case 'js':
      return <img src={JsIcon} alt="html" width="16" height="16"/>;
    case 'ts':
      return <img src={TsIcon} alt="html" width="16" height="16"/>;
    case 'tsx':
    case 'jsx':
      return <img src={TsxIcon} alt="html" width="16" height="16"/>;
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
    case 'svg':
    case 'ico':
      return <img src={PhotoIcon} alt="html" width="16" height="16"/>;
    case 'gitignore':
      return <img src={GitIgnoreIcon} alt="html" width="16" height="16"/>;
    case 'json':
      return <img src={JsonIcon} alt="html" width="16" height="16"/>;
    default:
      return '📄';
  }
};

const File: React.FC<FileProps> = ({ file }) => {
  return (
    <div className="file">
      <span>{getFileIcon(file.name)}</span>
      <span className="file-name">{file.name}</span>
    </div>
  );
};

export default File;
