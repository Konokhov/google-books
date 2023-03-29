import ContentLoader from "react-content-loader";

const Skeleton = () => {
    return (
        <ContentLoader
            speed={1}
            width={260}
            height={400}
            viewBox="0 0 260 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="260" height="350" />
        </ContentLoader>
    );
};

export default Skeleton;