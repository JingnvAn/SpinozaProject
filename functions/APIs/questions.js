export function getAllQuestions(request, response) {
    const questions = [
        {
            'id': '1',
            'title': 'parlindrome',
            'body': 'Write a function isParlindrome() that ...' 
        },
        {
            'id': '2',
            'title': 'Two Sum',
            'body': 'Write a function twoSum() that ...' 
        }
    ]
    return response.json(questions);
}