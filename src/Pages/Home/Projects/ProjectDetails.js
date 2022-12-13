import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ProjectDetails = ({project}) => {
    const {Elements, details, id, thumbnail, projectName, image1, image2, image3, image4 } = project
    return (
        <div className="card extra-style card-compact w-100 bg-base-100 shadow-2xl">

            <figure><img className='h-96 w-full' src={thumbnail} alt="" /></figure>

            <div className="card-body">
                <div className='flex justify-between items-center'>
                <h2 className="card-title">{projectName}</h2>
                
                </div>
                <div>
                    <div style={{ margin: '0% 0% 30% 0%' }} className=''>
                        {
                            details.length > 100 ?
                                <>{details.slice(0, 99) + '...'} </>
                                :
                                details
                        }
                    </div>

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className=' text-gray-500 font-semibold'>Elements: {Elements}</p>
                        </div>
                        <div className="card-actions ">
                            <Link to={`/products/${id}`}>
                                <PrimaryButton>See All</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;