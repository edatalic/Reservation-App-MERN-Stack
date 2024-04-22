import useFetch from "../../hooks/useFetch.js"
import "./featured.css"

const Featured = () => {

    const {data,loading,error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")


  return (
    <div className="featured">
        {loading ? ("Loading please wait") : ( <> <div className="featuredItem">
            <img src="https://eurotalk.com/blog/wp-content/uploads/2015/08/berlin3-600x600.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/11/florian-wehde-1092251-unsplash1-600x600.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
             <img src="https://info.westerncentralny.aaa.com/sites/default/files/2023-05/AAA%20London%20600x600.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div> </> )}
    </div>
  )
}

export default Featured