import NewsItem from './NewsItem'

function NewsGrid({items}){
    return(
            <div className='news-grid'>{
            items.map((item) => 
                <NewsItem item = {item}/>
            )}
            </div>
        
    )
}

export default NewsGrid