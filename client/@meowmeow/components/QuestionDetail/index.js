import React, { useState, useEffect, Component } from 'react'
import IntlMessages from '../../utils/IntlMessages'
import 'react-quill/dist/quill.snow.css'
import 'highlight.js/styles/base16/solarized-light.css'
import Detail from './Detail'
import { loggedIn } from '../../authentication/index'
import Tags from '../Tags'
import Comment from './Comment'

function QuestionDetail(props) {
    // const [qDetail, setQDetail] = useState()
    // const questionId = getQid()
    // useEffect(() => {
    //     Axios
    //         .get(`/question/${questionId}/detail`)
    //         .then(({ data }) => {
    //             setQDetail(data.data)
    //         })
    //         .catch(() => {
    //             console.log(null)
    //         }
    //         )
    // })

    const qDetail = props.data
    const qAnswer = props.answer
    const authUser = loggedIn();
    return (
        <>
            <div className="container q-title-container">
                <div className="flex flex-nowrap gap-5">
                    <div className="grid grid-rows-2 gap-1">
                        <h2 className="text-3xl">{qDetail.title}</h2>
                        <Tags tags={qDetail.categories.map((category) => [category.category])} />
                    </div>
                </div>
            </div>
            <div className="divider my-1"></div>
            <div className="container q-content-container">
                <Detail user={qDetail.userID} detail={qDetail.content} voteIndex={qDetail.numUpVote - qDetail.numDownVote} time={qDetail.dateCreated} question={true}  id={qDetail._id} questionId={qDetail._id}/>
            </div>
            <div className="divider my-1"></div>
            <Comment qDetail={qDetail} qAnswer={qAnswer}/>
        </>
        // : <>
        //     <PageLoader />
        // </>
    )
}

export default QuestionDetail;

