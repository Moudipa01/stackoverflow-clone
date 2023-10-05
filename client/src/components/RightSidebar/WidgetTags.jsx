import React from 'react'

const WidgetTags = () => {
    const tags = ['c', 'css', 'express', 'firebase', 'html', 'java', 'javascript', 'mern', 'mongodb', 'dijango', 'flask', 'python', 'machine-learning', 'deep-learning', 'mysql', 'node.js', 'php', 'react.js'];
    return (
        <div className="widget-tags">
            <h4>Watched tags</h4>
            <div className="widget-tags-div">
                {tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
        </div>
    );
};

export default WidgetTags;