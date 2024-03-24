import "./styles.scss";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export const ContentMovieSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#323238" highlightColor="#444">
            <div className='content-movie-skeleton'>
                <Skeleton count={4} height={28} />
                <Skeleton height={288} />
            </div>
        </SkeletonTheme>
    )
}